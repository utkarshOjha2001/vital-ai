import CustomButton from './components/CustomButton';
import CustomChip from './components/CustomChip';
import Header from './components/Header';
import CustomCard from './components/CutsomCard';
import { FileText, CircleCheck, TriangleAlert } from 'lucide-react';


export default function Home() {
  return (
    <div
      className="
    absolute inset-0 min-h-screen w-full
    dark:bg-background
    [background:radial-gradient(circle_900px_at_50%_-10%,color-mix(in_srgb,var(--secondary)_15%,transparent)_0%,transparent_70%)]
  "
    >
      <Header />

      <div className='flex w-screen mt-20 pl-12 pr-10 justify-between'>
        <div>
          <CustomChip className='w-55'
            title={'Introducing vital ai'.toLocaleUpperCase()}
          />
          <div className='mt-5 text-7xl font-bold tracking-tight text-[#D4E4FA]'>
            <div>
              Understand Your
            </div>
            <div className='
   bg-linear-to-r from-[#B9A7FF] to-[#8ED8FF] bg-clip-text text-transparent'>
              Medical Reports
            </div>
            <div className=''>with AI</div>
          </div>
          <p className='text-[#C7C4D8] mt-5 font-semibold'>
            Instantly translate complex clinical jargon into clear,<br /> actionable insights. Empower your health journey with <br /> precision artificial intelligence.
          </p>
          <div className='flex mt-10 gap-4 items-center'>
            <CustomButton size='md'>
              Upload Report
            </CustomButton>

            <CustomButton variant='secondary' size='md'>
              View Demo
            </CustomButton>
          </div>
        </div>

        <div className='w-[50%]'>
          <div className='mt-15'>
            <CustomCard variant='natural'
            >
              <div className='flex items-center justify-between w-full'>

                <div className='flex gap-3 items-center font-semibold'>
                  <FileText className='text-[#A2E7FF] w-6 h-6' />

                  <div className='text-lg'>
                    Blood Panel Analysis
                  </div>
                </div>

                <CustomChip
                  className='text-[#C5C0FF] bg-[#1E273E]'
                  variant='none'
                  title='Analyzed in 1.2s'
                />

              </div>
              <div className="h-px w-full bg-secondary/20 mt-4" />

              <CustomCard
                variant='natural'
                className='bg-[#101b2c] border-none mt-4 flex w-full justify-between rounded-lg items-center'
              >
                <div className='text-[#C7C4D8] text-md'>
                  Hemoglobin (Hb)
                  <p className='text-white'>
                    14.2 g/dL
                  </p>
                </div>
                <div>
                  <CircleCheck className='text-[#A2E7FF] w-6 h-6' />
                </div>
              </CustomCard>

              <CustomCard
                variant='danger'
                className='mt-4 flex w-full justify-between rounded-lg items-center mb-12'
              >
                <div className='text-md'>
                  LDL Cholesterol
                  <p className=''>
                    160 mg/dL
                  </p>
                </div>
                <div>
                  <TriangleAlert className=' w-6 h-6' />
                </div>
              </CustomCard>

            </CustomCard>
          </div>
        </div>
      </div>

    </div>
  );
}