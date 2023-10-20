// "use client";
// import { useState } from "react";
// import Image from "next/image";

/* DO NOT TOUCH FOR NOW */
// import "./left-nav.css";

// export default function LeftNav() {
//   const [open, setOpen] = useState(false);
//   const navbarIcons = [
//     {
//       srcOutline: HomeIconOutline,
//       srcSolid: HomeIconSolid,
//       alt: "home-icon",
//       tabName: "Home",
//       href: "dashboard",
//       path: null,
//     },
//     {
//       srcOutline: TemplateIconOutline,
//       srcSolid: TemplateIconSolid,
//       alt: "templates-icon",
//       tabName: "Templates",
//       href: "dashboard/templates",
//       path: "templates",
//     },
//     {
//       srcOutline: ContentIconOutline,
//       srcSolid: ContentIconSolid,
//       alt: "content-icon",
//       tabName: "My Content",
//       href: "dashboard/my-content",
//       path: "my-content",
//     },
//     {
//       srcOutline: InsightIconOutline,
//       srcSolid: InsightIconSolid,
//       alt: "insights-icon",
//       tabName: "AI Insights",
//       href: "dashboard/ai-insights",
//       path: "ai-insights",
//     },
//     {
//       srcOutline: MailIcon,
//       srcSolid: MailIconSolid,
//       alt: "message-icon",
//       tabName: "Message",
//       href: "dashboard/message",
//       path: "message",
//     },
//   ];

//   const settingsIcon = {
//     srcOutline: SettingsIconOutline,
//     srcSolid: SettingsIconSolid,
//     alt: "settings-icon",
//     tabName: "Settings",
//     href: "dashboard/settings",
//     path: "settings",
//   };

//   const exitIcon = {
//     srcOutline: ExitIconOutline,
//     srcSolid: ExitIconSolid,
//     alt: "exit-icon",
//     tabName: "Logout",
//     href: "logout",
//   };

//   const renderNavbarIcons = () => {
//     return navbarIcons.map((icon) => (
//       <li key={icon.alt} className={styles.list_item}>
//         <NavbarIcon icon={icon} expand={open} />
//       </li>
//     ));
//   };

//   return (
//     <aside className={`${styles.dashboard_navbar} ${open ? styles.open : ""}`}>
//       <div
//         className={`${styles.dashboard_round_btn} ${open ? styles.show : ""}`}
//         onClick={() => setOpen(!open)}
//       >
//         <Image
//           className={styles.round_btn_icon}
//           src={open ? ChevronLeft : ChevronRight}
//           alt="chevron_icon"
//           width={35}
//           height={35}
//         />
//       </div>
//       <div className={styles.wrapper_box}>
//         <div className={styles.wrapper}>
//           <div className={styles.box1}>
//             <Image
//               className={styles.logo_small}
//               src={ApplogoSolidIcon}
//               alt="retink-icon"
//               width={30}
//               height={30}
//             />
//           </div>
//           <div className={styles.box2}>
//             <Image
//               className={styles.logo_large}
//               src={AppLogoXl}
//               alt="retink-icon"
//               width={148}
//               height={40}
//             />
//           </div>
//         </div>
//         <ul className={styles.dashboard_navbar_icons}>{renderNavbarIcons()}</ul>
//       </div>
//       <ul className={styles.nav_bottom}>
//         <li className={styles.list_item}>
//           <NavbarIcon icon={settingsIcon} expand={open} />
//         </li>
//         <li className={styles.list_item}>
//           <NavButton icon={exitIcon} expand={open} />
//         </li>
//         <div></div>
//       </ul>
//     </aside>
//   );
// }
