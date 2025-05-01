import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  CheckCircle,
  Circle,
  FileText,
  File,
} from "lucide-react";

export default function Proifile() {
  return (
    <div className="flex h-full w-full">
      {/* Left empty side */}
      <div className="border-r border-gray-200"></div>

      {/* Right side - Candidate details */}
      <div className="p-8 bg-white flex flex-col">
        {/* Profile header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/51/87/student-avatar-user-profile-icon-vector-47025187.jpg"
            alt="Pradeep Yadav"
            className="w-24 h-24 rounded-full mb-2 object-cover"
          />
          <h2 className="text-xl font-medium text-gray-800">Pradeep Yadav</h2>
          <p className="text-gray-500 mb-4">Software Developer</p>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <button className="flex items-center bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Message
            </button>
            <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md">
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Contact information */}
        <div className="mb-8">
          <div className="flex items-start mb-3">
            <Mail className="w-4 h-4 text-gray-500 mt-1 mr-3" />
            <span className="text-gray-600">Oliviaemmanuel@gmail.com</span>
          </div>
          <div className="flex items-start mb-3">
            <Phone className="w-4 h-4 text-gray-500 mt-1 mr-3" />
            <span className="text-gray-600">(958) 834-8494</span>
          </div>
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-3" />
            <span className="text-gray-600">
              1148, Broadway St, Port Coralie,
              <br />
              Los Angeles, CA
            </span>
          </div>
        </div>

        {/* Recruitment Process */}
        <div className="mb-8">
          <h3 className="font-medium text-gray-800 mb-2">
            Recruitment Process
          </h3>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">
                3/5 Rounds completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full w-3/5"></div>
            </div>
          </div>

          {/* Rounds */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-600">Phone call</span>
              </div>
              <span className="text-gray-500 text-sm">Sep, 14</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-600">Aptitude test</span>
              </div>
              <span className="text-gray-500 text-sm">Friday</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Circle className="w-5 h-5 text-gray-300 mr-3" />
                <span className="text-gray-600">Technical round</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Circle className="w-5 h-5 text-gray-300 mr-3" />
                <span className="text-gray-600">Group discussion</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Circle className="w-5 h-5 text-gray-300 mr-3" />
                <span className="text-gray-600">HR Round</span>
              </div>
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Attachments</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-50 rounded flex items-center justify-center mr-3">
                <FileText className="w-4 h-4 text-red-500" />
              </div>
              <div className="flex-grow">
                <p className="text-gray-700">Curriculum vitae.pdf</p>
                <p className="text-xs text-gray-500">14 Sep, 2020 at 11:04pm</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                <File className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex-grow">
                <p className="text-gray-700">Cover letter.doc</p>
                <p className="text-xs text-gray-500">14 Sep, 2020 at 11:06pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
