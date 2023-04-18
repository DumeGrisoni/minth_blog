import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div className="flex items-center p-5">
      <button
        type="button"
        className="border p-3 rounded-md mr-2 hover:bg-[#00b4d880] hover:border-transparent"
      >
        <Link href="/" className="text-[#EAEDEE] flex items-center mr-5">
          <ArrowLeftCircleIcon className="h-6 w-6 mr-2 text-[#EAEDEE] " />
          Retour au site
        </Link>
      </button>

      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
