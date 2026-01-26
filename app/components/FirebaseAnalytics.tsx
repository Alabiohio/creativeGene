"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "@/app/lib/firebase";
import { logEvent } from "firebase/analytics";

export default function FirebaseAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const trackPageView = async () => {
            const instance = await analytics;
            if (instance) {
                logEvent(instance, 'page_view', {
                    page_path: pathname,
                    page_search: searchParams.toString(),
                });
            }
        };

        trackPageView();
    }, [pathname, searchParams]);

    return null;
}
