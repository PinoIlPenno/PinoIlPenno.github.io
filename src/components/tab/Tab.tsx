import {ReactNode} from "react";

type TabItem = {
    id: string,
    title: string,
    node: ReactNode | string
}

type TabProps = {
    items: TabItem[],
    active?: string
}

export const Tab = ({items, active = ""}: TabProps) => {
    return (
        <div className="d-flex flex-column row-gap-4 overflow-auto" style={{minWidth: "100px"}}>
                <nav className="align-self-center">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        {
                            items.map(item => (
                                <button className={`nav-link ${active === item.id ? 'active' : ''}`} id={item.id + "-tab"} data-bs-toggle="tab"
                                        data-bs-target={`#${item.id}`} type="button" role="tab" aria-controls={item.id}
                                        aria-selected="true" key={item.id + '-tab'}
                                >
                                    {item.title}
                                </button>
                            ))
                        }
                    </div>
                </nav>

            <div className="tab-content overflow-auto overflow-y-auto remove-scrollbar" style={{height: "500px"}} id="nav-tabContent">
                {
                    items.map(item => (
                        <div
                            className={`tab-pane fade ${active === item.id ? 'show active' : ''}`}
                            id={item.id}
                            role="tabpanel"
                            aria-labelledby={item.id + "-tab"}
                            key={item.id}
                        >
                            {item.node}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
