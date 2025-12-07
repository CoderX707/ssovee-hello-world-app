import React from "react";
import { PluginComponentProps } from "@/types/plugins";
import { WindowWithoutSideMenu } from "@/plugins/sdk";

const HelloWorld: React.FC<PluginComponentProps> = ({ api, settings, app}) => {
  return (
    <WindowWithoutSideMenu
      app={app}
      defaultSize={{ width: 400, height: 600 }}
      isResizable={false}
    >
      <div className="p-4 bg-neutral-800 rounded-lg">
        <h2 className="text-white text-xl">Hello World!</h2>
        <button
          onClick={() => api.showToast("Hello from plugin!", "success")}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Click Me
        </button>
      </div>
    </WindowWithoutSideMenu>
  );
};

export default HelloWorld;
