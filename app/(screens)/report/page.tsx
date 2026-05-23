'use client';

import CustomCard from '@/components/CutsomCard';
import CustomButton from '@/components/CustomButton';
import { useSession } from 'next-auth/react';

import {
  CloudUpload,
  FolderOpen,
  CircleCheck,
  LoaderCircle,
} from 'lucide-react';

import './report.css';

const Report = () => {
  const {data: session} = useSession();
  console.log(session)
  return (
    <div className="report-container">
      <div className="report-top-glow" />
      <div className="report-bottom-glow" />
      <div className='text-neutral text-xl sm:text-2xl lg:text-3xl mt-6 font-bold'>
        Upload Clinical Data
      </div>
      <p className='mt-2 text-white text-xs sm:text-sm leading-6 sm:leading-7'>
        Securely drop your laboratory results, imaging reports, or clinical notes.
        <br className='hidden sm:block' />
        Our proprietary AI will extract, analyze, and map biomarkers instantly.
      </p>
      <div className='mt-6 sm:mt-8 lg:mt-10 flex flex-col lg:flex-row gap-5 lg:gap-8 items-stretch lg:items-start'>
        <CustomCard
          variant='natural'
          className='rounded-xl w-full lg:w-[70%]'
        >

          <div
            className='
              border
              border-dashed
              border-[#272F3F]

              rounded-lg

              pt-6
              pb-8
              sm:pt-10
              sm:pb-15
              px-4

              flex
              flex-col

              items-center
              justify-center
            '
          >

            {/* ICON */}
            <div
              className='
                w-15
                h-15

                bg-boxdark

                rounded-full

                flex
                items-center
                justify-center

                shadow-[0_0_60px_rgba(162,231,255,0.18),0_0_120px_rgba(162,231,255,0.12),0_0_180px_rgba(162,231,255,0.08)]

                backdrop-blur-xl
              '
            >
              <CloudUpload
                width={22}
                height={22}
                className='text-[#A2E7FF]'
              />
            </div>

            {/* TITLE */}
            <div
              className='
                text-base
                sm:text-lg
                text-[#DCE8F8]
                font-bold
                mt-4
                sm:mt-5
                text-center
              '
            >
              Drag & drop report files
            </div>

            {/* DESCRIPTION */}
            <p
              className='
                mt-5

                text-center

                text-[#B6BDD0]

                leading-5

                text-xs
              '
            >
              Supports PDF, JPG, PNG, and DICOM formats up to 50MB.
              <br />
              All uploads are end-to-end encrypted and HIPAA
              <br />
              compliant.
            </p>

            {/* BUTTON */}
            <CustomButton
              variant='none'
              className='bg-boxdark mt-8'
            >
              <FolderOpen width={15} height={15} />

              <div className='text-sm font-medium'>
                Browse Files
              </div>

            </CustomButton>

          </div>

        </CustomCard>


        <div className='bg-[#0A1728] w-full lg:w-[30%] min-h-60 lg:min-h-100 rounded-xl border-t-4 pt-5 pl-5 pr-5 border-[#0E2C3E]'>

          <div className='mt-7'>

            <div className='flex justify-between items-center'>

              <div className='flex items-center gap-3'>

                <div
                  className='
            w-3
            h-3

            rounded-full

            bg-secondary-dark

            shadow-[0_0_18px_rgba(152,217,240,0.9)]
          '
                />

                <div
                  className='
            text-secondary-dark

            text-xs

            font-bold

            tracking-[2px]
          '
                >
                  {'PROCESSING'}
                </div>

              </div>

              <div
                className='
          text-white

          text-sm

          font-semibold
        '
              >
                78%
              </div>

            </div>
            <div className='mt-5 flex gap-4 w-fit'>

              <div className='w-px h-10 bg-white/10 rounded-full' />

              <div>

                <div
                  className='
        text-neutral

        text-sm

        font-semibold
      '
                >
                  Q3_Comprehensive_Panel.pdf
                </div>

                <p
                  className='
        mt-1

        text-xs

        text-[#9AA7B8]
      '
                >
                  Extracting tabular data...
                </p>

              </div>

            </div>

            <div className='mt-14 w-full flex gap-4 items-center mb-5'>
                <CircleCheck width={22} hanging={22} className='text-primary' />
                <div className='text-sm text-neutral'>
                      Document validation
                </div>
            </div>
            <div className='w-full flex gap-4 items-center mb-6'>
                <CircleCheck width={22} hanging={22} className='text-primary' />
                <div className='text-sm text-neutral'>
                    OCR Text Extraction
                </div>
            </div>
             <div className='w-full flex gap-4 items-center mb-6'>
                <LoaderCircle width={22} hanging={22} className='text-secondary-dark animate-spin' />
                <div className='text-sm text-neutral'>
                    Biomarker Mapping
                </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  );
};

export default Report;