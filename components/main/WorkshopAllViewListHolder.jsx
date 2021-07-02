import React from 'react';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

export default function WorkshopAllViewListHolder(props) {
    const {Workshop} = props;
    return <div className={'WAItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><label id={'pTitle'}>{Workshop.workShopTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'wAresTag'}>Conductors Name:&nbsp;
                    {
                        Workshop.conductorNames.map(
                            name =>{
                                return name+", "
                            }
                        )
                    }
                </td>
            </tr>
            <tr>
                <td className={'wAresTag'}>Presenter Affiliation : {Workshop.affiliation}</td>
            </tr>
            <tr>
                <td className={'wAresTag'}>Presenter Email : {Workshop.email}</td>
            </tr>
            <tr>
                <td className={'wAresTag'}>Workshop Conducting Date: {Workshop.postedDate}</td>
            </tr>
            </tbody>
        </table>
    </div>
}