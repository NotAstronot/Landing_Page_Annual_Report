import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBinoculars } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcPodiumWithSpeaker } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";

    const routes = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FcHome />,
        },
        {
            path: "/annualreport",
            name: "AnnualReport",
            icon: <FcAcceptDatabase/>,
        },
        {
            path: "/overview",
            name: "Overview",
            icon: <FcBinoculars/>,
        },
        {
            path: "/educationthepublic",
            name: "EducationThePublic",
            icon: <FcReading />,
        },
        {
            path: "/educationhealtcareprofesional",
            name: "EducationHealtcareProfesional",
            icon: <FcPodiumWithSpeaker />,
        },
        {
            path: "/recognizingleaders",
            name: "RecognizingLeaders",
            icon: <FcBusinessman />,
        },
        {
            path: "/collaboration",
            name: "Collaboration",
            icon: <FcCollaboration />,
        },
        {
            path: "/supporters",
            name: "Supporters",
            icon: <FcProcess />,
        },
        {
            path: "/boardofdirectors",
            name: "BoardOfDirectors",
            icon: <FcTodoList />,
        },
        {
            path: "/financialhighlights",
            name: "FinancialHighLights",
            icon: <FcCurrencyExchange />,
        },
        {
            path: "/contactus",
            name: "ContactUs",
            icon: <FcContacts />,
        },
    ];

    const SideBar = ({ children }) => {
        const [isOpen, setIsOpen] = useState(false);
            const toggle = () => setIsOpen(!isOpen);
            const inputAnimation = {
            hidden: {
                width: 0,
                padding: 0,
                transition: {
                duration: 0.2,
                },
            },
            show: {
                width: "140px",
                padding: "5px 15px",
                transition: {
                duration: 0.2,
                },
            },
            };
        
            const showAnimation = {
            hidden: {
                width: 0,
                opacity: 0,
                transition: {
                duration: 0.5,
                },
            },
            show: {
                opacity: 1,
                width: "auto",
                transition: {
                duration: 0.5,
                },
            },
            };
        
            return (
            <>
                <div className="main-container">
                <motion.div
                    animate={{
                    width: isOpen ? "200px" : "45px",
        
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 10,
                    },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                    <AnimatePresence>
                        {isOpen && (
                        <motion.h1
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="logo"
                        >
                            DoSomeCoding
                        </motion.h1>
                        )}
                    </AnimatePresence>
        
                    </div>
                    <section className="routes">
                    {routes.map((route, index) => {
                        if (route.subRoutes) {
                        return (
                            <SidebarMenu
                            setIsOpen={setIsOpen}
                            route={route}
                            showAnimation={showAnimation}
                            isOpen={isOpen}
                            />
                        );
                        }
        
                        return (
                        <NavLink
                            to={route.path}
                            key={index}
                            className="link"
                            activeClassName="active"
                        >
                            <div className="icon">{route.icon}</div>
                            <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                                >
                                {route.name}
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </NavLink>
                        );
                    })}
                    </section>
                </motion.div>
        
                <main>{children}</main>
                </div>
            </>
            );
        };
        
export default SideBar;