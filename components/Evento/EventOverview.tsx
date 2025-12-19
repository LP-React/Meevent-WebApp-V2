import { Accordion } from '@radix-ui/react-accordion'
import { useTranslations } from 'next-intl'
import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export const EventOverview = () => {
    const t = useTranslations('Eventos')
  return (
    <section className="mt-6">
    <Accordion type="single" collapsible defaultValue="overview">
      <AccordionItem value="overview">
        <AccordionTrigger className="text-2xl">
          {t("overview")}
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <p>
            {/* info del evento */}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
  )
}
