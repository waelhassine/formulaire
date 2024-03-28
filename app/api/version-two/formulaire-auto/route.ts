// import sendEmail from '@/lib/send_email';
import sendEmail from '@/lib/send_email';
import { NextRequest } from 'next/server';
import fs from 'fs';

import puppeteer from 'puppeteer';
import handlebars from 'handlebars';
var MomentHandler = require('handlebars.moment');
var H = require('just-handlebars-helpers');
export async function POST(request: NextRequest) {
  const originalData = await request.json();
  console.log(originalData);
  H.registerHelpers(handlebars);
  MomentHandler.registerHelpers(handlebars);
  // Compile Handlebars template
  const template = handlebars.compile(fs.readFileSync('./public/formulaire-auto.html', 'utf8'));
  let configLaunch = {
    headless: true,
    ignoreDefaultArgs: ['--disable-extensions'],
  };
  // Render HTML from template
  const html = template(originalData);

  // Generate PDF
  const browser = await puppeteer.launch(configLaunch);

  const page = await browser.newPage();
  const waitUntil = 'networkidle';
  // Inject Tailwind CSS directly into the HTML page

  await page.setContent(html, {
    waitUntil: 'networkidle0',
  });
  await page.addStyleTag({ path: './public/stylepdf.css' });
  await page.setDefaultNavigationTimeout(0);

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: {
      // increase margins (in this example, required!)
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  });
  await browser.close();
  await sendEmail(pdf, 'Formulaire Auto ', originalData.step20_nom, originalData.step20_prenom);

  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="generated-pdf.pdf"',
    },
  });
}
