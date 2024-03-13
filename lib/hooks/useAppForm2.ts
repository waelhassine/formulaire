"use client";
import { useForm, DefaultValues } from "react-hook-form";
// Types
import { FormValues } from "@/types/form2";

export default function useAppForm(defaultValues?: DefaultValues<FormValues>) {
  return useForm<FormValues>({ defaultValues });
}
