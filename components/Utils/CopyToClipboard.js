import * as Clipboard from "expo-clipboard";

export const handleCopyToClipboard = async (text) => {
  await Clipboard.setStringAsync(text);
};
