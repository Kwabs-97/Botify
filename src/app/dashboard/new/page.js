import React from "react";
import { ArrowLeft } from "lucide-react";
import CustomDropzone from "@/components/misc/CustomDropzone";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import CustomInput from "@/components/form-elements/CustomInput";
import { search_right } from "@/assets/icons";

function Page() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="header py-8 px-12 border-b border-b-gray-200">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1 items-center">
            <ArrowLeft className="text-gray-500" />
            <h3 className="text-gray-900 text-2xl leading-8 font-bold">
              Create a new chatbot
            </h3>
          </div>
        </div>
      </div>
      {/* Preview*/}
      <div className="flex flex-row gap-8 px-12">
        {/* Data sources */}
        <div className="flex flex-col gap-6 flex-1">
          <section className="flex flex-col gap-1">
            <h3 className="text-gray-900 text-2xl leading-8 font-bold">
              Data sources
            </h3>
            <p className="text-gray-600">Train your chatbot with data</p>
          </section>
          <section>
            <p className="text-gray-600">Upload files</p>
            <CustomDropzone />
          </section>
          <section className="flex flex-row gap-1 items-center">
            <Separator
              orientation="horizontal"
              className="w-[222.5px] h-[1px] bg-gray-200"
            />
            <p className="text-nowrap text-gray-500">or train from</p>
            <Separator
              orientation="horizontal"
              className="w-[222.5px] h-[1px] bg-gray-200"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="text-gray-900 text-2xl leading-8 font-bold">
              Website link
            </h3>
            <CustomInput
              type="url"
              iconSrc={search_right}
              className="w-full h-[52px]"
              placeholder="Enter website url"
            />
          </section>
        </div>

        {/* Preview */}
        <div className="flex-1 flex flex-col gap-6">
          <section className="flex flex-col gap-1">
            <h3 className="text-gray-900 text-2xl leading-8 font-bold">
              Preview
            </h3>
          </section>
          <section className="flex flex-col gap-6 p-6 bg-gray-50 rounded-lg">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-black">
                Dectected files or links
              </h4>
              <p className="text-base font-normal text-gray-600">None</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-black">
                Dectected characters
              </h4>
              <p className="text-base font-normal text-gray-600">0</p>
            </div>
            <div></div>
          </section>
        </div>
      </div>

      {/* Steps */}
      <div></div>
    </div>
  );
}

export default Page;
