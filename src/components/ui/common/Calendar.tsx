"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/common/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 bg-background-sub rounded-md border border-white/10",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption:
          "flex justify-center pt-1 relative items-center text-text-light",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border-text-muted hover:border-accent-gold"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-text-muted rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent-teal rounded-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-accent-gold text-background-main hover:bg-accent-gold hover:text-background-main focus:bg-accent-gold focus:text-background-main",
        day_today: "bg-accent-lavender/20 text-text-light",
        day_outside: "text-text-muted opacity-50",
        day_disabled: "text-text-muted opacity-50",
        day_range_middle:
          "aria-selected:bg-accent-teal/20 aria-selected:text-text-light",
        day_hidden: "invisible",
        ...classNames,
      }}
      // 'components' prop 대신, 라이브러리가 공식적으로 지원하는
      // 'IconLeft'와 'IconRight' prop을 직접 사용한다.
      // 이것이 가장 안전하고 명확한 방식이다.
      IconLeft={<ChevronLeft className="h-4 w-4" />}
      IconRight={<ChevronRight className="h-4 w-4" />}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
