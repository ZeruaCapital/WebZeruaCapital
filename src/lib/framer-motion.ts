"use client";

import { motion as motionComponent } from "framer-motion";
import { useScroll as useScrollHook } from "framer-motion";
import { useTransform as useTransformHook } from "framer-motion";
import { AnimatePresence as AnimatePresenceComponent } from "framer-motion";

export const motion = motionComponent;
export const useScroll = useScrollHook;
export const useTransform = useTransformHook;
export const AnimatePresence = AnimatePresenceComponent;
