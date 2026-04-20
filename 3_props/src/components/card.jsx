export default function Card1(props) {

    console.log(props.cardname);

    return (
        <div className="group w-full max-w-sm rounded-xl border border-zinc-800 bg-black p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:border-white">
            <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                    src="https://picsum.photos/400/300?random=90"
                    alt="Featured content"
                    className="h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="mb-4">
                <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black">
                    {props.featureContent}
                </span>
                <h2 className="mb-2 text-xl font-bold text-white transition-colors duration-200 group-hover:text-gray-300">
                    {props.cardname}
                </h2>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
                Discover cutting-edge design patterns and UI components that elevate
                your digital experiences.
            </p>

            <div className="flex items-center justify-between">
                <button className="rounded-lg bg-white px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-gray-200">
                    Learn More
                </button>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>234 views</span>
                </div>
            </div>
        </div>
    );
}
