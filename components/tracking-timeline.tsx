'use client'

import React from "react"

import { 
  CheckCircle, 
  Package, 
  Truck, 
  Home,
  Check,
  CreditCard,
  FileText,
  Warehouse,
  PackageCheck
} from 'lucide-react'
import type { TrackingStep } from '@/lib/types'
import { cn } from '@/lib/utils'

interface TrackingTimelineProps {
  steps: TrackingStep[]
  currentStepIndex: number
}

const iconMap: Record<string, React.ElementType> = {
  'check-circle': CheckCircle,
  'package': Package,
  'truck': Truck,
  'home': Home,
}

export function TrackingTimeline({ steps, currentStepIndex }: TrackingTimelineProps) {
  return (
    <div className="relative">
      {steps.map((step, index) => {
        const Icon = iconMap[step.icon] || Package
        const isCompleted = index < currentStepIndex
        const isCurrent = index === currentStepIndex
        const isFuture = index > currentStepIndex
        
        return (
          <div key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Vertical line */}
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "absolute left-5 top-10 h-full w-0.5 -translate-x-1/2",
                  isCompleted ? "bg-emerald-500" : "bg-border"
                )}
              />
            )}
            
            {/* Icon circle */}
            <div 
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                isCompleted && "border-emerald-500 bg-emerald-500 text-white",
                isCurrent && "border-emerald-500 bg-emerald-50 text-emerald-600 ring-4 ring-emerald-100",
                isFuture && "border-muted bg-muted text-muted-foreground"
              )}
            >
              {isCompleted ? (
                <Check className="h-5 w-5" />
              ) : (
                <Icon className="h-5 w-5" />
              )}
            </div>
            
            {/* Content */}
            <div className={cn(
              "flex-1 pt-1",
              isFuture && "opacity-50"
            )}>
              <h4 className={cn(
                "text-sm font-semibold",
                isCurrent && "text-emerald-600"
              )}>
                {step.title}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
