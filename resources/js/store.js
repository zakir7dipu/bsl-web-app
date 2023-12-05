import {configureStore} from "@reduxjs/toolkit";
import MenuActionReducer from "./featurs/MenuAction/MenuSlice.js";
import AuthReducer from "./featurs/AuthAction/AuthSlice.js";
import SettingReducer from "./featurs/Settings/SettingsSlice.js";
import SeoFeatures from "./featurs/SEOSlice/SEOSlice.js";
import TestFeatures from "./featurs/TestFeatures/TestFeatures.js";
import TechnologyFeature from "./featurs/Technology/TechnologySlice.js";
import IndustriesFeature from "./featurs/Industries/IndustriesSlice.js";
import NavReducer from "./featurs/NavAction/NavSlice.js";
import AboutsFeature from "./featurs/AboutUs/AboutUsSlice.js";
import ManagementFeature from "./featurs/Management/ManagementSlice.js";
import TeamsFeature from "./featurs/Teams/TeamSlice.js";
import ClientFeature from "./featurs/Clients/ClientSlice.js";
import PartnerFeature from "./featurs/Partner/PartnerSlice.js";
import ServiceFeature from "./featurs/Service/ServiceSlice.js";
import ProductFeature from "./featurs/Product/ProductSlice.js";
import CoursesFeature from "./featurs/Courses/CourseSlice.js";
import CurricularFeature from "./featurs/Curricular/CurricularSlice.js";
import BlogsFeature from "./featurs/Blogs/BlogSlice.js";
import CaseStudyFeature from "./featurs/CaseStudy/CaseStudySlice.js";
import PagesFeature from "./featurs/Pages/PageSlice.js";
import TestimonialFeature from "./featurs/Testimonial/TestimonialSlice.js";
import MessageFeature from "./featurs/Messages/MessagesSlice.js";
import SubscriberFeature from "./featurs/Subscribers/SubscribersSlice.js";
import ScheduleFeature from "./featurs/Schedule/ScheduleSlice.js";
import HostFeature from "./featurs/Hosts/HostSlice.js";
import WorkshopFeature from "./featurs/WorkshopSeminar/WorkshopSlice.js";
import SlotModalReducer from "./featurs/SlotModal/SlotModalSlice.js";
import WorkshopDaysFeature from "./featurs/WorkshopDays/WorkshopDaysSlice.js"
import WorkshopSessionsFeature from "./featurs/WorkshopSessions/WorkshopSessionsSlice.js"


const store = configureStore({
    reducer: {
        navAction: NavReducer,
        menuAction: MenuActionReducer,
        slotModalAction: SlotModalReducer,
        authUser: AuthReducer,
        generalSettings: SettingReducer,
        SeoReducer: SeoFeatures,
        testData: TestFeatures,
        technologyReducer: TechnologyFeature,
        industriesReducer: IndustriesFeature,
        aboutsReducer: AboutsFeature,
        managementReducer: ManagementFeature,
        teamReducer: TeamsFeature,
        clientReducer: ClientFeature,
        partnerReducer: PartnerFeature,
        serviceReducer: ServiceFeature,
        productReducer: ProductFeature,
        coursesReducer: CoursesFeature,
        curricularReducer: CurricularFeature,
        blogsReducer: BlogsFeature,
        caseStudyReducer: CaseStudyFeature,
        pagesReducer: PagesFeature,
        testimonialReducer: TestimonialFeature,
        messageReducer: MessageFeature,
        subscriberReducer: SubscriberFeature,
        scheduleReducer: ScheduleFeature,
        hostReducer: HostFeature,
        workshopSeminarReducer: WorkshopFeature,
        workshopDaysReducer: WorkshopDaysFeature,
        workshopSessionsReducer: WorkshopSessionsFeature,
    }
})

export default store;
