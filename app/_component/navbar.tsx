

export default function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white w-full">
            <div className="max-w-7xl mx-auto flex items-center w-full">
                <h1 className="text-xl font-bold">My App</h1>

                <div className="ml-auto flex items-center space-x-4">
                    <a href="/signin" className="text-sm">Sign In</a>
                    <a href="/signup" className="text-sm">Sign Up</a>
                </div>
            </div>
        </nav>
    );
}