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

    dark:bg-background
    [background:radial-gradient(circle_900px_at_50%_-10%,color-mix(in_srgb,var(--secondary)_15%,transparent)_0%,transparent_70%)]
  "
>
  <Header />

  <div
    className="
      flex
      flex-col
      lg:flex-row

      w-full

      mt-12
      md:mt-16
      lg:mt-20

      px-5
      md:px-8
      lg:pl-12
      lg:pr-10

      gap-16
      lg:gap-10

      justify-between
    "
  >

    {/* LEFT SECTION */}
    <div className="w-full lg:w-auto">

      <CustomChip
        className="w-fit"
        title={"INTRODUCING VITAL AI"}
      />

      <div
        className="
          mt-5

          text-5xl
          sm:text-6xl
          lg:text-7xl

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
          mt-5
          font-semibold

          text-sm
          sm:text-base

          leading-7
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

          mt-10
          gap-4

          sm:items-center
        "
      >
        <CustomButton
         size="md"
         onClick={()=>{router.push('/report')}}
         >
          Upload Report
        </CustomButton>

        <CustomButton variant="secondary" size="md">
          View Demo
        </CustomButton>
      </div>

    </div>

    {/* RIGHT SECTION */}
    <div
      className="
        w-full
        lg:w-[40%]

        relative
      "
    >

      <div className="mt-0 lg:mt-15">

        <CustomCard variant="natural">

          <div className="flex items-center justify-between w-full">

            <div className="flex gap-3 items-center font-semibold">

              <FileText className="text-[#A2E7FF] w-6 h-6" />

              <div className="text-base sm:text-lg">
                Blood Panel Analysis
              </div>

            </div>

            <CustomChip
              className="text-[#C5C0FF] bg-[#1E273E]"
              variant="none"
              title="Analyzed in 1.2s"
            />

          </div>

          <div className="h-px w-full bg-secondary/20 mt-4" />

          <CustomCard
            variant="natural"
            className="
              bg-[#101b2c]
              border-none
              mt-4
              flex
              w-full
              justify-between
              rounded-lg
              items-center
            "
          >
            <div className="text-[#C7C4D8] text-md">
              Hemoglobin (Hb)

              <p className="text-white">
                14.2 g/dL
              </p>
            </div>

            <CircleCheck className="text-[#A2E7FF] w-6 h-6" />

          </CustomCard>

          <CustomCard
            variant="danger"
            className="
              mt-4
              flex
              w-full
              justify-between
              rounded-lg
              items-center
              mb-12
            "
          >
            <div className="text-md">
              LDL Cholesterol

              <p>
                160 mg/dL
              </p>
            </div>

            <TriangleAlert className="animate-pulse w-6 h-6" />

          </CustomCard>

        </CustomCard>

        <CustomCard
          variant="secondary"
          className="
            flex
            gap-5

            w-full
            sm:w-80

            mt-2
            lg:mt-0

            lg:absolute
           lg:top-75
            lg:left-[240]
          "
        >

          <div
            className="
              min-w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-linear-to-r
              from-[#B9A7FF]
              to-[#8ED8FF]
            "
          >
            <Bot className="w-6 h-6 text-white" />
          </div>

          <div className="font-semibold text-sm leading-7 text-[#D7E7FF]">

            <TypingText
              className="text-sm sm:text-md tracking-wide"
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