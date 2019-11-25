import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    const { actions } = useContext(ColorContext);
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            < div style={{ display: 'flex' }}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{ background: color, width: '24px', height: '24px', cusor: 'pointer' }}
                        onClick={() => actions.setColor(color)}
                        onContextMenu={e => {
                            e.preventDefault(); // 마우스 오른쪽 클릭 시 메뉴가 뜨는 것을 무시함.
                            actions.setSubColor(color);
                        }}
                    />
                ))}
            </div>
            <hr />
        </div >
    );
};

export default SelectColors;