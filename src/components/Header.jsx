import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-purple-800 text-white flex justify-around h-14 items-center">
                <div>
                    <h1 className="font-extrabold text-xl">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4 front-medium">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}