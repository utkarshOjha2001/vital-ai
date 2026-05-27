'use client';

import CustomButton from '../../components/CustomButton';
import { useRouter } from 'next/navigation';
import CustomChip from '../../components/CustomChip';
import Header from '../../components/Header';
import CustomCard from '../../components/CutsomCard';
import { FileText, CircleCheck, TriangleAlert, Bot } from 'lucide-react';
import { TypingText } from '../../utils/helpers';

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-hidden
        bg-background
        [background:radial-gradient(circle_900px_at_50%_-10%,color-mix(in_srgb,var(--secondary)_12%,transparent)_0%,transparent_70%)]
      "
    >
      <Header />
      <div
        className="
          flex
          flex-col
          lg:flex-row
          w-full
          mt-8
          md:mt-10
          lg:mt-12
          px-4
          md:px-6
          lg:pl-25
          lg:pr-25
          gap-12
          lg:gap-8
          justify-between
        "
      >
        <div className="w-full lg:w-auto">
          <CustomChip
            className="w-fit scale-90"
            title={"INTRODUCING VITAL AI"}
          />
          <div
            className="
              mt-4

              text-4xl
              sm:text-5xl
              lg:text-6xl

              font-bold
              tracking-tight

              text-[#D4E4FA]

              leading-tight
            "
          >

            <div>
              Understand Your
            </div>

            <div
              className="
                bg-linear-to-r
                from-[#B9A7FF]
                to-[#8ED8FF]

                bg-clip-text
                text-transparent
              "
            >
              Medical Reports
            </div>

            <div>
              with AI
            </div>

          </div>

          <p
            className="
              text-[#C7C4D8]

              mt-4

              font-medium

              text-xs
              sm:text-sm
              lg:text-[15px]

              leading-6
            "
          >
            Instantly translate complex clinical jargon into clear,<br/>
            actionable insights. Empower your health journey with <br/>
            precision artificial intelligence.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row

              mt-8

              gap-3

              sm:items-center
            "
          >

            <CustomButton
              size="md"
              className="scale-90 origin-left"
              onClick={() => {
                router.push('/report');
              }}
            >
              Upload Report
            </CustomButton>

            <CustomButton
              variant="secondary"
              size="md"
              className="scale-90 origin-left"
            >
              View Demo
            </CustomButton>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div
          className="
            w-full
            lg:w-[38%]

            relative
          "
        >

          <div className="mt-0 lg:mt-10">

            <CustomCard
              variant="natural"
              className="scale-[0.92] origin-top"
            >

              <div className="flex items-center justify-between w-full">

                <div className="flex gap-2 items-center font-semibold">

                  <FileText className="text-[#A2E7FF] w-5 h-5" />

                  <div className="text-sm sm:text-base">
                    Blood Panel Analysis
                  </div>

                </div>

                <CustomChip
                  className="text-[#C5C0FF] bg-[#1E273E] scale-90"
                  variant="none"
                  title="Analyzed in 1.2s"
                />

              </div>

              <div className="h-px w-full bg-secondary/20 mt-3" />

              <CustomCard
                variant="natural"
                className="
                  bg-[#101b2c]
                  border-none

                  mt-3

                  flex
                  w-full

                  justify-between
                  rounded-lg

                  items-center
                "
              >

                <div className="text-[#C7C4D8] text-sm">

                  Hemoglobin (Hb)

                  <p className="text-white mt-1">
                    14.2 g/dL
                  </p>

                </div>

                <CircleCheck className="text-[#A2E7FF] w-5 h-5" />

              </CustomCard>

              <CustomCard
                variant="danger"
                className="
                  mt-3

                  flex
                  w-full

                  justify-between
                  rounded-lg

                  items-center

                  mb-8
                "
              >

                <div className="text-sm">

                  LDL Cholesterol

                  <p className="mt-1">
                    160 mg/dL
                  </p>

                </div>

                <TriangleAlert className="animate-pulse w-5 h-5" />

              </CustomCard>

            </CustomCard>

            <CustomCard
              variant="secondary"
              className="
                flex
                gap-4

                w-full
                sm:w-72

                mt-2
                lg:mt-0

                lg:absolute
                lg:top-62
                lg:left-[210px]

                scale-[0.92]
              "
            >

              <div
                className="
                  min-w-8
                  h-8

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-linear-to-r
                  from-[#B9A7FF]
                  to-[#8ED8FF]
                "
              >
                <Bot className="w-4 h-4 text-white" />
              </div>

              <div
                className="
                  font-medium

                  text-sm

                  leading-6

                  text-[#D7E7FF]
                "
              >

                <TypingText
                  className="tracking-wide"
                  text={`Your LDL is slightly elevated.
Consider discussing dietary
changes with your provider.
Would you like a suggested
action plan? `}
                  speed={60}
                />

              </div>

            </CustomCard>

          </div>

        </div>

      </div>

    </div>
  );
}