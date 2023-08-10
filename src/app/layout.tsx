import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "La Prima Pizza",
    description:
        "Welcome to La Prima Pizza, an authentic Italian restaurant offering a delectable array of pizzas, pastas, and burgers. Indulge your taste buds with our mouthwatering pizzas, crafted with the finest ingredients and cooked to perfection in traditional Italian wood-fired ovens. Savor the rich flavors of our homemade pastas, lovingly prepared with time-honored recipes passed down through generations. Craving something different? Try our scrumptious burgers, blending Italian flair with juicy, flavorful patties and a variety of toppings. At La Prima Pizza, we take pride in serving an exceptional dining experience, combining warm Italian hospitality with a cozy ambiance. Our skilled chefs put their heart and soul into every dish, ensuring each bite transports you to the heart of Italy. Whether you're visiting with family, friends, or colleagues, our diverse menu caters to all palates and preferences. Join us for a culinary journey that celebrates the essence of Italy's rich gastronomic heritage. Delight in our extensive menu, carefully curated to offer an unforgettable taste of Italy's finest culinary delights. Buon Appetito!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Notification />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
