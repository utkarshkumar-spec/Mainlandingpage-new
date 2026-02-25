"use client";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { extractGraphQLError } from '@/utils/graphqlError';
import { Cloud, X, Upload, CheckCircle2, Globe, Palette, User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Mail, Lock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { gql } from "@apollo/client";
import { showToast } from "@/utils/toast";
import {
   
    Star,
    Users,
    Activity
} from "lucide-react";
import { EmailLogin } from "@/components/emailLogin";
import { SignupForm } from "@/components/SignupForm";


interface LoginProps {
    formData: any;
    setFormData: any;
    onSubmit: any;
}
export const REGISTER_TENANT = gql`
  mutation RegisterTenant($input: RegisterTenantInput!) {
    registerTenant(input: $input) {
      success
      message
      user {
        id
        email
        firstName
        lastName
        role
        subdomain
      }
      logoUpload {
        uploadUrl
        fileUrl
        expiresIn
      }
    }
  }
`;


interface SignupFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    onSubmit: () => Promise<void>;
    loading?: boolean;
}


export interface FormData {
    organisationName: string;
    logoUrl: string;
    email: string;
    password?: string; // added because login flow includes password
    firstName: string;
    lastName: string;
    subdomain: string;
    plan: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
    };
}


interface RegisterTenantResponse {
    registerTenant: {
        success: boolean;
        message?: string;
        user?: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: string;
            subdomain: string;
        };
        logoUpload?: {
            uploadUrl: string;
            fileUrl: string;
            expiresIn: number;
        };
    };
}

export default function Signupflow() {
    const [step, setStep] = useState<"email" | "adminprofile">("email");

    const [formData, setFormData] = useState<FormData>({
        organisationName: "",
        logoUrl: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        subdomain: "",
        plan: "starter",
        colors: {
            primary: "#3B82F6",
            secondary: "#6B7280",
            accent: "#8B5CF6",
            background: "#FFFFFF",
            text: "#000000",
        },
    });

    const [registerTenant, { loading }] = useMutation<RegisterTenantResponse>(REGISTER_TENANT);

    const handleEmailSubmit = async (email: string, password: string) => {
    
        setFormData((prev) => ({ ...prev, email, password }));
        setStep("adminprofile");
        showToast.success("Email verified!", 1000);
    };

    const handleSubmit = async (): Promise<void> => {
        if (loading) return;

        if (
            !formData.organisationName.trim() ||
            !formData.firstName.trim() ||
            !formData.lastName.trim() ||
            !formData.subdomain.trim()
        ) {
            showToast.error("All required fields must be filled");
            return;
        }

        const variables = {
            input: {
                subdomain: formData.subdomain.trim().toLowerCase(),
                companyName: formData.organisationName.trim(),
                adminEmail: formData.email.trim(),
                adminPassword: formData.password,
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                brandColors: {
                    primary: formData.colors.primary,
                    secondary: formData.colors.secondary,
                    accent: formData.colors.accent,
                    background: formData.colors.background,
                    text: formData.colors.text,
                },
            },
        };

        try {
            const result = await registerTenant({
                variables: variables
            });

            // Handle Apollo Client errors
            if (result.error) {
                const message = extractGraphQLError({ errors: result.error });
                showToast.error(message);
                return;
            }

            const response = result.data?.registerTenant;

            if (!response?.success) {
                showToast.error(response?.message || "Registration failed");
                return;
            }
            showToast.success("Account created successfully!");
            showToast.loading("Redirecting to your admin panel...", 1500);
                // Redirect to the new tenant's subdomain after a short delay
                setTimeout(() => {
                    window.location.href = `https://${response.user?.subdomain}${process.env.NEXT_PUBLIC_ADMIN_PANAL_URL}/auth/signin`;
                }, 1500);

        } catch (error) {
            console.error("MUTATION ERROR →", error);
            const message = extractGraphQLError(error);
            showToast.error(message);
        }
    };

    return (
        <div className="">
            {step === "email" && (
                <EmailLogin
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleEmailSubmit}
                />
            )}

            {step === "adminprofile" && (
                <SignupForm
                    onSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    loading={loading}
                />
            )}
        </div>
    );
}

