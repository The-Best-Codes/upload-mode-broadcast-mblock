# upload-mode-broadcast-mblock

## TL;DR

This is the source code and `.mext` file for Makeblock's official "Upload mode broadcast" extension compatible with Arduino and Arduino-based devices such as Arduino Uno, mBot v1, etc.

---

> [!NOTE]
> For the process below, you will need an mBlock account. You can get one at https://passport.mblock.cc/

If you want to add the mBlock extension "Upload mode broadcast" to your device on mBlock, the best option for you is to download the `.mext` file from the [latest release](https://github.com/The-Best-Codes/upload-mode-broadcast-mblock/releases/latest). After downloading the ZIP file, right-click on it and choose "Extract" (or "Extract Here" or similar depending on your operating system). A new folder named `arduino_broadcast` will be created. It contains the `.mext` file you need.

Next, open the [mBlock extension builder](https://ext.mblock.cc/). In the sidepanel, click "My Plugin" to expand the plugin menu, then "My Extension" to access your extensions.

> ![image](https://user-images.githubusercontent.com/106822363/227027690-0386a26e-f436-42d6-ae0c-ab06ad35953d.png)

Next, click "Import Data" and upload the file you downloaded:

> ![image](https://user-images.githubusercontent.com/106822363/227028267-c28cc4c4-1748-4901-9b4c-688f2e3ced3b.png)

> ![image](https://user-images.githubusercontent.com/106822363/227028328-f20b1ec7-0414-442f-b6e6-cdee2c0bbb77.png)

After the extension is uploaded, you can edit it to your needs. To add it to your device, go to the extension editing section, then scroll down until you find the category called "Support device/sprite". Put the name(s) of the device(s) you want to support in the input:

> ![image](https://user-images.githubusercontent.com/106822363/227029267-a7952196-3085-4eca-82cc-67eb1a161369.png)

> ![image](https://user-images.githubusercontent.com/106822363/227029326-576d4493-638d-4711-b44e-022d9b2f6d3e.png)

> [!IMPORTANT]
> In the image below, you can see that multiple devices are already supported by the extension. **Remove all of these** to avoid publishing a duplicate extension for those devices. **Add only the device ID(s) you want to support that aren't already supported and remove all others**. If your device ID is already listed, you don't need to do any of this, as the extension is already available for your device.

> ![image](https://user-images.githubusercontent.com/106822363/227029098-7db15226-b62e-4b3d-a46b-7e5bc51d06dc.png)

Now, **change the extension ID** to avoid conflict. Go to the basic information tab and change the ID to something new and unique:

> ![image](https://github.com/The-Best-Codes/upload-mode-broadcast-mblock/assets/106822363/ea9714f5-6889-4e6f-ae38-74a32dbd0cbb)

If you forget to do this, your extension will not be published.

Save your changes and submit your extension for review. That's it!

---

If you need further support, ask a question on the makeblock forum (https://forum.makeblock.com/) or join my [Discord support server](https://discord.com/invite/dKeuR9yfBs) for help.

[BestCodes](https://bestcodes.dev)
