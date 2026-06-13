export default function HooksDemoPage() {
    const hooks = [
        {
            name: "useEffect",
            href: "/hooks-demo/useEffect",
        },
        {
            name: "useMemo",
            href: "/hooks-demo/useMemo",
        },
        {
            name: "useCallback",
            href: "/hooks-demo/useCallback",
        },
        {
            name: "useRef",
            href: "/hooks-demo/useRef",
        },
        {
            name: "useContext",
            href: "/hooks-demo/useContext",
        },
        {
            name: "useReducer",
            href: "/hooks-demo/useReducer",
        },
        {
            name: "custom Hook",
            href: "/hooks-demo/customHook",
        },
        {
            name: "useTransition",
            href: "/hooks-demo/useTransition",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">
                React Hooks Demo
            </h1>

            <ul className="space-y-4">
                {hooks.map((hook) => (
                    <li key={hook.href}>
                        <a
                            href={hook.href}
                            className="
                                block
                                p-4
                                rounded-xl
                                border
                                shadow-sm
                                hover:shadow-md
                                hover:-translate-y-1
                                transition-all
                                duration-200
                            "
                        >
                            <h2 className="text-xl font-semibold">
                                {hook.name}
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                Xem demo và ví dụ về {hook.name}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}