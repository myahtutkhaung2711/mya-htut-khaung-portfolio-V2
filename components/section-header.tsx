"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
    badge: string
    badgeIcon: LucideIcon
    subtitle?: string
}

export function SectionHeader({
    badge,
    badgeIcon: BadgeIcon,
    subtitle,
}: SectionHeaderProps) {
    return (
        <div className="text-center mb-16 sm:mb-20">
            {/* Badge */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
            >
                <BadgeIcon className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary">{badge}</span>
            </motion.div>

            {/* Subtitle */}
            {subtitle && (
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-1xl sm:max-w-3xl mx-auto px-4 sm:px-0"
                >
                {subtitle}
                </motion.p>
            )}
        </div>
    )
}