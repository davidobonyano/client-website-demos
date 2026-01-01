import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

interface FooterProps {
    appName: string;
    description?: string;
}

export default function Footer({ appName, description }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
            <div className="container-width grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-6 tracking-tight">{appName}</h3>
                    <p className="text-gray-400 max-w-sm leading-relaxed">
                        {description || "Providing premium services with a focus on quality, reliability, and customer satisfaction."}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Connect</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-width mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} {appName}. All rights reserved.</p>
                <a
                    href="https://david-obonyano.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                    Built by <span className="font-semibold text-white">David</span> — View Portfolio →
                </a>
            </div>
        </footer>
    );
}
