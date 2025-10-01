import React from "react";
import "./App.css";

export default function Footer() {
return (
    <footer className="bg-gray-800 text-white py-8 px-4 text-center mt-12">
    <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="flex items-center mb-4 md:mb-0">
            <div className=" w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
            <img src="./img/Image 3-7-25 à 08.36.jpg" style={{ borderRadius: 50 }} alt="" />
            </div>
            <span className="font-bold text-xl">CIAS DU SUD MINERVOIS</span>
        </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
        <p>© 2025 CIAS DU SUD MINERVOIS. Tous droits réservés.</p>
        </div>
    </div>
    </footer>
);
}
