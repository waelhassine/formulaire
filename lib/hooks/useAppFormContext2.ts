"use client";
import { useFormContext } from "react-hook-form";
// Types
import { FormValues } from "@/types/form2";

export default function useAppFormContext() {
  return useFormContext<FormValues>();
}
