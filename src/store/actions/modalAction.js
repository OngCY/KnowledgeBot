export const SHOW_CREATE_BOT_MODAL = 'SHOW_CREATE_BOT_MODAL';
export const CLOSE_CREATE_BOT_MODAL = 'CLOSE_CREATE_BOT_MODAL';


export function closeDialog()
{
    return {
        type: CLOSE_CREATE_BOT_MODAL
    }
}

export function openDialog(options)
{
    return {
        type: SHOW_CREATE_BOT_MODAL,
        options
    }
}

