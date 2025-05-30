"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  Linkedin,
} from "lucide-react";

export default function Contacto() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#f7f8fa]">
      <Navigation />
      <FinalCTA />
      <Footer />
    </main>
  );
}
