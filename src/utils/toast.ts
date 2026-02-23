// src/utils/toast.ts
import { toast } from "sonner";
import { extractGraphQLError } from "./graphqlError";

// Default durations in milliseconds
const TOAST_DURATIONS = {
    SUCCESS: 4000,
    ERROR: 6000,
    LOADING: 1000, // Loading toasts don't auto-close by default
    DEFAULT: 5000,
} as const;

export const showToast = {
    success: (message: string, duration?: number) =>
        toast.success(message, {
            duration: duration || TOAST_DURATIONS.SUCCESS,
            closeButton: false,
        }),

    error: (message: string, duration?: number) =>
        toast.error(message, {
            duration: duration || TOAST_DURATIONS.ERROR,
            closeButton: false,
        }),

    loading: (message: string, duration?: number) =>
        toast(message, {
            duration: duration || 3000,
            closeButton: false,
        }),

    // Custom method for dismissing loading toasts
    dismiss: (toastId?: string | number) => {
        if (toastId) {
            toast.dismiss(toastId);
        } else {
            toast.dismiss();
        }
    },

    // Method to update loading toast to success/error
    update: (id: string | number, options: {
        message: string;
        type: "success" | "error" | "loading";
        duration?: number;
    }) => {
        const baseOptions = {
            duration: options.duration || TOAST_DURATIONS[options.type.toUpperCase() as keyof Omit<typeof TOAST_DURATIONS, 'LOADING'>] || TOAST_DURATIONS.DEFAULT,
            closeButton: false,
        };

        switch (options.type) {
            case "success":
                toast.success(options.message, { ...baseOptions, id });
                break;
            case "error":
                toast.error(options.message, { ...baseOptions, id });
                break;
            case "loading":
                toast.loading(options.message, { ...baseOptions, id });
                break;
        }
    },

    // Promise-based toast for async operations
    promise: <T>(
        promise: Promise<T>,
        options: {
            loading: string;
            success: string | ((data: T) => string);
            error: string | ((error: any) => string);
            duration?: {
                success?: number;
                error?: number;
            };
        }
    ) => {
        return toast.promise(promise, {
            loading: options.loading,
            success: (data: T) => ({
                message: typeof options.success === 'function' ? options.success(data) : options.success,
                duration: options.duration?.success || TOAST_DURATIONS.SUCCESS,
                closeButton: false,
            }),
            error: (error: any) => ({
                message: extractGraphQLError(error),
                duration: options.duration?.error || TOAST_DURATIONS.ERROR,
                closeButton: false,
            }),
        });
    },
};

// Custom hook for advanced toast management
export const useToast = () => {
    const createLoading = (message: string) => {
        return toast.loading(message, {
            duration: TOAST_DURATIONS.LOADING,
            closeButton: true,
        });
    };

    const updateLoadingToSuccess = (id: string | number, message: string, duration?: number) => {
        showToast.update(id, {
            type: "success",
            message,
            duration: duration || TOAST_DURATIONS.SUCCESS,
        });
    };

    const updateLoadingToError = (id: string | number, message: string, duration?: number) => {
        showToast.update(id, {
            type: "error",
            message,
            duration: duration || TOAST_DURATIONS.ERROR,
        });
    };

    return {
        createLoading,
        updateLoadingToSuccess,
        updateLoadingToError,
        ...showToast,
    };
};