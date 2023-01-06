export async function handleFileDrop(e: DragEvent) {

    //! Tenho que descobrir qual o tipo do e

    if(!e) throw Error('Erro na imagem')

    e.preventDefault()
    e.stopPropagation()

    console.log(typeof e)
    console.log(e)

    if(!e.dataTransfer) throw Error('Arquivo não possui uma imagem')
    const imageFile = e.dataTransfer.files[0]

    console.log(imageFile)

    const reader = new FileReader()

    reader.onload = () => {
        var fileURL = reader.result
        console.log(fileURL)
        return fileURL
    }

    var imageURL = await reader.readAsDataURL(e.dataTransfer.files[0])
    
    return imageURL


}