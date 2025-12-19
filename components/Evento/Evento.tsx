import { FieldSeparator, } from "@/components/ui/field"
import { EventLocation } from './EventLocation'
import { EventOrganizer } from './EventOrganizer'
import { EventHeader } from './EventHeader'
import { EventOverview } from './EventOverview'
import { EventBanner } from './EventBanner'
import { EventReport } from './EventReport'
import { EventButtonMobile } from './EventButtonMobile'
import { EventGood } from './EventGood'

export const Evento = () => {

    return (
        <div className="w-full min-h-dvh pb-28">
            <EventBanner />
            <EventHeader />

            <FieldSeparator />

            <EventOverview />
            
            <FieldSeparator />

            <EventGood/>

            <FieldSeparator />

            <EventLocation />

            <FieldSeparator />

            <EventOrganizer />
            <EventReport />

            <FieldSeparator />

            <EventButtonMobile />

        </div>

    )
}
