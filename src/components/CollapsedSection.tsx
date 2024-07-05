import { useState } from "react"
import { Collapse } from "reactstrap"
type infoList = {
    titleElement: string,
    subtitleElement: string
}

const CollapsedSection = ({ titleElement, subtitleElement }: infoList) => {
    const [collapseOpen, setCollapseOpen] = useState(false)
    const toggle = () => setCollapseOpen(!collapseOpen)
    return (
        <>
            <a className="w-100 d-flex justify-content-between align-items-center
            border p-3 nav-link" onClick={toggle}>
                <h6>
                    {titleElement}
                </h6>
                <span className="d-flex gap-3 align-items-center">
                    <i className={`bi ${collapseOpen? 'bi dash': 'bi-arrow-down-short'} text-black`}></i>
                    {/* bi-arrow-down-short */}
                </span>
            </a>
            <Collapse isOpen={collapseOpen}>
                <section className="w-100 d-flex 
                        justify-content-between align-items-center
                        border p-3">
                    <h6>
                        {subtitleElement}
                    </h6>
                </section>
            </Collapse>
        </>
    )
}

export default CollapsedSection;