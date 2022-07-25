import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full p-2 pl-5 flex items-center justify-start bg-red-600 border-b border-red-600">
            <Logo />
            <p className="text-2xl font-bold text-white pl-4">SCC</p>
            <button className="absolute right-10 bg-gray-700 rounded-md p-1 text-red-600 hover:bg-white">Logout</button>
        </header>
    );
}