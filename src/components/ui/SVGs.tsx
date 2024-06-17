type SVGProps = React.HTMLAttributes<SVGElement> & {
    strokeWidth?: string | number;
};

export function ArrowUR(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
            </svg>
        </>
    );
}

export function ChevronD(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </>
    );
}

export function Envelope(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
            </svg>
        </>
    );
}

export function Facebook(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
        </>
    );
}

export function Instagram(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
            </svg>
        </>
    );
}

export function Twitter(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-x"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
        </>
    );
}

export function MapPin(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
            </svg>
        </>
    );
}

export function Phone(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
            </svg>
        </>
    );
}

export function Send(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
            </svg>
        </>
    );
}

export function Hamburger(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
            </svg>
        </>
    );
}

export function Close(props: SVGProps) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </>
    );
}

export function Hero(props: SVGProps) {
    return (
        <>
            <svg
                width="702"
                height="702"
                viewBox="0 0 702 702"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M701 493.593C701 550.822 680.739 599.697 640.218 640.218C599.697 680.739 550.822 701 493.593 701C436.364 701 387.488 680.739 346.967 640.218L61.7819 355.033C21.2606 314.512 1 265.636 1 208.407C1 151.178 21.2606 102.303 61.7819 61.7819C102.303 21.2606 151.178 1 208.407 1H493.593C550.822 1 599.697 21.2606 640.218 61.7819C680.739 102.303 701 151.178 701 208.407V493.593Z"
                    stroke="#FECACA"
                />
                <path
                    d="M675.074 493.593C675.074 543.716 657.31 586.446 621.782 621.782C586.446 657.31 543.716 675.074 493.593 675.074C443.469 675.074 400.643 657.31 365.115 621.782L80.2181 336.597C44.69 301.261 26.9259 258.531 26.9259 208.407C26.9259 158.284 44.69 115.554 80.2181 80.2181C115.554 44.69 158.284 26.9259 208.407 26.9259H493.593C543.716 26.9259 586.446 44.69 621.782 80.2181C657.31 115.554 675.074 158.284 675.074 208.407V493.593Z"
                    stroke="#FCA5A5"
                />
                <path
                    d="M649.148 493.593C649.148 536.61 633.977 573.291 603.634 603.634C573.291 633.977 536.61 649.148 493.593 649.148C450.575 649.148 413.894 633.977 383.551 603.634L98.3662 318.449C68.0233 288.106 52.8518 251.425 52.8518 208.407C52.8518 165.39 68.0233 128.709 98.3662 98.3663C128.709 68.0234 165.39 52.8519 208.407 52.8519H493.593C536.61 52.8519 573.291 68.0234 603.634 98.3663C633.977 128.709 649.148 165.39 649.148 208.407V493.593Z"
                    stroke="#F87171"
                />
                <path
                    d="M623.222 493.593C623.222 529.313 610.547 559.848 585.197 585.198C559.848 610.547 529.313 623.222 493.593 623.222C457.872 623.222 427.337 610.547 401.988 585.198L116.802 300.012C91.4527 274.663 78.7778 244.128 78.7778 208.407C78.7778 172.687 91.4527 142.152 116.802 116.803C142.152 91.4527 172.687 78.7778 208.407 78.7778H493.593C529.313 78.7778 559.848 91.4527 585.197 116.803C610.547 142.152 623.222 172.687 623.222 208.407V493.593Z"
                    stroke="#EF4444"
                />
                <path
                    d="M597.296 493.592C597.296 522.207 587.214 546.693 567.049 567.049C546.693 587.214 522.207 597.296 493.593 597.296C464.978 597.296 440.492 587.214 420.136 567.049L134.951 281.864C114.786 261.507 104.704 237.022 104.704 208.407C104.704 179.793 114.786 155.307 134.951 134.95C155.307 114.786 179.793 104.704 208.407 104.704H493.593C522.207 104.704 546.693 114.786 567.049 134.95C587.214 155.307 597.296 179.793 597.296 208.407V493.592Z"
                    stroke="#DC2626"
                />
                <path
                    d="M571.37 493.592C571.37 515.101 563.785 533.442 548.613 548.613C533.442 563.785 515.102 571.37 493.593 571.37C472.084 571.37 453.743 563.785 438.572 548.613L153.387 263.428C138.215 248.256 130.63 229.916 130.63 208.407C130.63 186.898 138.215 168.558 153.387 153.387C168.558 138.215 186.898 130.63 208.407 130.63H493.593C515.102 130.63 533.442 138.215 548.613 153.387C563.785 168.558 571.37 186.898 571.37 208.407V493.592Z"
                    stroke="#B91C1C"
                />
                <path
                    d="M545.444 493.593C545.444 507.996 540.355 520.191 530.177 530.177C520.191 540.355 507.996 545.445 493.593 545.445C479.189 545.445 466.995 540.355 457.008 530.177L171.823 244.992C161.645 235.006 156.556 222.811 156.556 208.407C156.556 194.004 161.645 181.809 171.823 171.823C181.809 161.645 194.004 156.556 208.407 156.556H493.593C507.996 156.556 520.191 161.645 530.177 171.823C540.355 181.809 545.444 194.004 545.444 208.407V493.593Z"
                    stroke="#991B1B"
                />
                <path
                    d="M519.519 493.593C519.519 500.794 516.926 506.844 512.029 512.029C502.523 521.247 484.663 521.247 475.156 512.029L189.971 226.844C185.074 221.658 182.482 215.609 182.482 208.407C182.482 195.156 195.156 182.481 208.407 182.481H493.593C506.844 182.481 519.519 195.156 519.519 208.407V493.593Z"
                    stroke="#7F1D1D"
                />
            </svg>
        </>
    );
}
