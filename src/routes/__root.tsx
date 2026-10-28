import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import NotFound from "@/pages/NotFound";
import appCss from "@/index.css?url";

const TITLE =
    "Гостиничные чеки Дербент — отчётные документы за проживание в Дербенте купить | Сделать документы о проживании в гостинице в Дербенте";
const DESCRIPTION =
    "Гостиничные чеки в Дербенте и отчётные документы за проживание для командировки: кассовый чек, счёт, акт, договор. Принимает любая бухгалтерия для авансового отчёта, оплата наличными и по безналу. Поможем сделать документы о проживании в гостинице в Дербенте. Чеки Дербент — быстро и официально.";
const OG_IMAGE = "https://cdn.poehali.dev/projects/***/files/91163f3f-2b39-4054-a446-227b5e7736a3.jpg";
const METRIKA = `(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
            return;
        }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(101026698, "init", {
    trustedDomains: ["poehali.dev"],
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    trackHash: true
});`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {name: "yandex-verification", content: "9da6a269911ca2d4"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {name: "keywords", content: "гостиничные чеки Дербент, отчетные документы за проживание Дербент, отчётные документы за проживание в Дербенте, гостиничные чеки в Дербенте, чеки за гостиницу Дербент, чек за проживание в гостинице Дербент, документы за проживание Дербент, отчётные документы для командировки в Дербент, документы для авансового отчёта Дербент, закрывающие документы гостиница Дербент, гостиница с отчётными документами Дербент, чеки Дербент, гостиничные чеки Дербент купить, сделать документы о проживании в гостинице в Дербенте, гостиничные чеки Махачкала"},
            {name: "author", content: "Выгодная командировка с отчетными документами"},
            {name: "robots", content: "index, follow"},
            {property: "og:title", content: TITLE},
            {property: "og:description", content: DESCRIPTION},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:url", content: "https://kassovie-cheki-original.ru/"},
            {property: "og:type", content: "website"},
            {property: "og:locale", content: "ru_RU"},
            {name: "twitter:image", content: OG_IMAGE},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;800;900&family=Golos+Text:wght@400;500;600;700&display=swap",
            },
            {rel: "icon", href: "/favicon.ico", sizes: "any"},
            {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
            {rel: "apple-touch-icon", href: "/apple-touch-icon.png"},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {children: METRIKA},
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    return (
        <RootDocument>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <Outlet/>
            </TooltipProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/101026698" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        <Scripts/>
        </body>
        </html>
    );
}
