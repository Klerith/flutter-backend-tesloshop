import { v4 as uuid } from 'uuid'

export const fileNamer = ( req: Express.Request, file: Express.Multer.File, callback: Function ) => {

    // console.log({ file })
    if ( !file ) return callback( new Error('File is empty'), false );

    const fileParts = file.originalname.split('.');
    const fileExtension = fileParts[ fileParts.length - 1 ]
    
    const fileExtensionMipetype = file.mimetype.split('/')[1];    
    const extension = (fileExtension) ? fileExtension : fileExtensionMipetype;

    const fileName = `${ uuid() }.${ extension }`;


    callback(null, fileName );

}
