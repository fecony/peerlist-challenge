import { ChevronLeft, ChevronRight } from "lucide-react";
import { Outlet } from "react-router";
import { Breadcrumb } from "~/components/breadcrumb";
import { DayNavigation } from "~/components/days/navigation";
import { Footer } from "~/components/footer";
import { Me } from "~/components/me";
import * as FadeIn from "~/components/motion";
import { Spacer } from "~/components/spacer";
import { cn } from "~/lib/cn";

export default function Layout() {
  return (
    <FadeIn.Container className="w-full">
      <FadeIn.Item>
        <Me />
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <div className="flex space-between">
          <Breadcrumb />

          <DayNavigation />
        </div>
      </FadeIn.Item>

      <FadeIn.Item>
        <Outlet />
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
