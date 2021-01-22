export const SHOW_CREATE_BOT_MODAL = 'SHOW_CREATE_BOT_MODAL';
export const CLOSE_CREATE_BOT_MODAL = 'CLOSE_CREATE_BOT_MODAL';
export const SHOW_DISPLAYREPORT_MODAL = 'SHOW_DISPLAYREPORT_MODAL';
export const CLOSE_DISPLAYREPORT_MODAL = 'CLOSE_DISPLAYREPORT_MODAL';
export const SHOW_DISPLAYENTITY_MODAL = 'SHOW_DISPLAYENTITY_MODAL';
export const CLOSE_DISPLAYENTITY_MODAL = 'CLOSE_DISPLAYENTITY_MODAL';

export function closeEntityDialog()
{
    return {
        type: CLOSE_DISPLAYENTITY_MODAL
    }
}

export function openEntityDialog(options)
{
    return {
        type: SHOW_DISPLAYENTITY_MODAL,
        options
    }
}

export function closeReportDialog()
{
    return {
        type: CLOSE_DISPLAYREPORT_MODAL
    }
}

export function openReportDialog(options)
{
    return {
        type: SHOW_DISPLAYREPORT_MODAL,
        options
    }
}

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