import styled from 'styled-components/native';
import AppColors from '../../utils/AppColors';

export const Container = styled.View`
  flex: 1;
  padding: 6px;
  margin-top: 20px;
  margin-right: 8px;
  height: 48px;
  flex-direction: row;
  background-color: ${AppColors.backgroundColor};
  align-items: center;
  border-radius: ${AppColors.borderRadius};
`;

export const Input = styled.TextInput`
  flex: 1;
  color: ${AppColors.fontColor};
  padding-right: 6px;
`;
