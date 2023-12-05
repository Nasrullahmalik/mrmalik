import uploadImage from '../lib/uploadImage.js';
import Bard from '../lib/bard.js';

const bardAi = new Bard();

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let textInput;
  
  if (args.length >= 1) {
    textInput = args.slice(0).join(" ");
  } else {
    if (m.quoted && m.quoted.text) {
      textInput = m.quoted.text;
    } else {
      return m.reply("Give some text");
    }
  }

  let quotedMessage = m.quoted ? m.quoted : m;
  let mimeType = (quotedMessage.msg || quotedMessage).mimetype || '';

  await m.react('💸');

  if (!mimeType) {
    try {
      let result = await Bard(textInput);
      await m.reply(result.content + "\n\nGoogle Bard AI:\n Created by\n *Nasrullah Machi*");
    } catch (error) {
      throw "An error occurred";
    }
  } else {
    let downloadedImage = await quotedMessage.download();
    let isImage = /image\/(png|jpe?g)/.test(mimeType);

    if (isImage) {
      let processedImage = await uploadImage(downloadedImage);
      let bardResult = await BardImg(textInput, processedImage);
      await m.reply(bardResult.content + "\n\nGoogle Bard AI:\n Created by\n *Nasrullah Machi*");
    } else {
      await m.reply("Only images are supported");
    }
  }
};

handler.help = ["bard"];
handler.tags = ['ai'];
handler.command = /^(bard)$/i;

export default handler;

async function Bard(text) {
  return await bardAi.question({
    'ask': text
  });
}

async function BardImg(text, image) {
  return await bardAi.questionWithImage({
    'ask': text,
    'image': image
  });
}
