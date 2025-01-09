import { FC } from "react";
import ActionLink from "../common/ActionLink";

interface PublicNavBarProps {
  children?: React.ReactNode;
}

const PublicNavBar: FC<PublicNavBarProps> = ({ children }) => {
  return (
    <nav className="border-b border-green-500 bg-green-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <ActionLink
              className="mr-4 flex flex-shrink-0 items-center font-bold text-2xl"
              targetPage="/vacancies"
              label="Job board"
            />
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <ActionLink
                className="mr-4 flex flex-shrink-0 items-center font-semibold"
                targetPage="/auth/signup"
                label="Get Started"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavBar;
