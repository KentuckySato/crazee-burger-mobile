import { Options } from "../components/shared/SelectInput"
import { AVAILABLE_OPTIONS, PUBLICISED_OPTIONS } from "./product"

export const isAvailableOptions: Options[] = [
    { id: "1", value: true, label: AVAILABLE_OPTIONS.IN_STOCK },
    { id: "2", value: false, label: AVAILABLE_OPTIONS.OUT_OF_STOCK },
]

export const isPublicisedOptions: Options[] = [
    { id: "1", value: false, label: PUBLICISED_OPTIONS.NO_PUB },
    { id: "2", value: true, label: PUBLICISED_OPTIONS.WITH_PUB },
]
