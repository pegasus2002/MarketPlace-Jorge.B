import React, { useState, useEffect } from 'react';
import { ItemInventory } from '../../components/ItemInventory'
import { blue_006, blue_011, blue_007, blue_010, blue_008, blue_009 } from '../../images/blue'
import { Select_01, Select_02, Select_03, Select_04, Select_05, Chest1 } from '../../images/blue'

import Grid from '@mui/material/Grid'

export const MarketPage = () => {
    const items_land: any[] = [
        { img_url: blue_006, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'gray', head: 'LOOTBOX' },
        { img_url: blue_011, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'gray', head: 'LAND' },
        { img_url: blue_011, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'orange', head: 'LAND' },
        { img_url: blue_011, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'orange', head: 'LAND' },
        { img_url: blue_011, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'gray', head: 'LAND' },
        { img_url: blue_011, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'gray', head: 'LAND' },
        { img_url: blue_006, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'orange', head: 'MARS LAB' },
        { img_url: blue_007, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'orange', head: 'SMELTER' },
        { img_url: blue_008, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'green', head: 'RADAR' },
        { img_url: blue_009, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'orange', head: 'CHRONOSPHERE' },
        { img_url: blue_010, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'orange', head: 'REACTOR' },
        { img_url: blue_010, content: '', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'green', head: 'REACTOR' },
        // {img_url:blue_010, content:'Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'purple'}
      ]

    const changeComponent = () => {

    }

    return (
        <>
            <div className='market-panel'>
                <div className='btn-group'>
                    <button className='btn-market btn-active'> Official Store </button>
                    <button className='btn-market'> Community Market </button>
                    <div style={{flexGrow: 1}} />
                    <select className='select-item'>
                        <option>SpaceY 2025</option>
                    </select>
                </div>

                <div className='select-group'>
                    <select className='select-panel'>
                        <option>All properties</option>
                        <option>All properties</option>
                        <option>All properties</option>
                    </select>
                    <select className='select-panel'>
                        <option>Rarity</option>
                        <option>Rarity</option>
                        <option>Rarity</option>
                    </select>
                    <div style={{flexGrow: 1}} />

                    <input type="text" className='form-input' />
                </div>

                <div className='inventory-group'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-around mt-5'>
                            <Grid container>
                                {
                                items_land.map((item, i) => {
                                    return (
                                        <Grid item xs={2} lg={2} sm={2} xl={2}>
                                            <ItemInventory key={`inventory-${i}`} item={item} />
                                        </Grid>
                                    )
                                })
                                }
                            </Grid>
                        </div>
                    </div>
                </div>

                <div className='pagination' style={{marginTop: '135px', display: 'flex', alignItems: 'center'}}>
                    <button style={{backgroundColor: '#403258', width: '32px', height: '34px'}}></button>
                    <input type='text' value='100'/>
                    of 500
                    <button style={{backgroundColor: '#403258', width: '32px', height: '34px'}}></button>
                </div>
            </div>
        </>
    );
}