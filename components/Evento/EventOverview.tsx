import { Accordion } from '@radix-ui/react-accordion'
import { useTranslations } from 'next-intl'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

interface Props {
  infoEvent: string,
}

export const EventOverview = ({ infoEvent }: Props) => {
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
              {infoEvent}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
