import { Blind, BtnClose} from "../common/common.style"
import {RegisterForm, FileBox, Switch, ImgList, CommendForm} from "./memorial.style"

export const MemorialReg = () => {
  return (
    <>
      <RegisterForm>
        <form action="#">
          <fieldset>
              <legend>추모의 글</legend>
              <select className="form select">
                  <option value="">문구를 선택해주세요</option>
                  <option value="옵션2">옵션1</option>
                  <option value="옵션2">옵션2</option>
                  <option value="옵션3">옵션3</option>
                  <option value="옵션4">옵션4</option>
              </select>
              <textarea className="form" placeholder="고인을 비방하는 댓글은 예고없이 삭제될 수 있습니다."></textarea>
              <FileBox>
                  <div className="row">
                    <label htmlFor="file">여기에 파일을 드래그 앤 드롭하거나 클릭하여 사진 또는 동영상을 등록할 수 있습니다.</label> 
                    <input type="file" id="file" className="fileNone" />
                  </div>
                  <ImgList className="row file_list">
                    <li><img src="../images/img_sample3.jpg" />
                        <BtnClose className="btn_close"><Blind>닫기</Blind></BtnClose>
                    </li>
                    <li><img src="../images/img_sample3.jpg" />
                        <BtnClose className="btn_close"><Blind>닫기</Blind></BtnClose>
                    </li>
                    <li><img src="../images/img_sample3.jpg" />
                        <BtnClose className="btn_close"><Blind>닫기</Blind></BtnClose>
                    </li>
                    <li className="movie"><img src="../images/img_sample3.jpg" />
                        <BtnClose className="btn_close"><Blind>닫기</Blind></BtnClose>
                    </li>
                  </ImgList>
              </FileBox>
              <div className="row input_row">
                <input type="text" className="form input1" placeholder="작성자명"></input>
                <input type="text" className="form input2" placeholder="비밀번호"></input>
              </div>
              <div className="register_btn">
                <span>
                  공개여부
                  <Switch className="switch">
                    <input type="checkbox" id="sw_item" className="checkbox" />
                    <label htmlFor="sw_item"></label>
                  </Switch>
                </span>
                <button>추모글 남기기</button>
              </div>
          </fieldset>
        </form>
    </RegisterForm>
    <CommendForm>
        <ul className="commend_box">
          <li>
            <strong>홍길동홍길동</strong>
            <div className="text_area">
              <p>삼가 조의 표하오며 고인의 유덕이 후세에 이어져 빛나기를 빕니다.</p>
            </div>
            <BtnClose className="btn_close"><Blind>닫기</Blind></BtnClose>
          </li>
          <li>
            <strong>김강수</strong>
            <div className="text_area">
              <p>밖의 비보에 한걸음에 달려가 위로의 말씀과 함께 고인의 가시는 길을 지켜 드려야 하는데 그러지 못하여 죄송합니다. 먼 곳에서나마 진심어린 삼가 조의를 표하오며 고인의 명복을 빕니다.</p>
              <ImgList>
                <li><img src="../images/img_sample3.jpg" />
                </li>
                <li className="movie"><img src="../images/thum_02.jpg" />
                </li>
              </ImgList>
            </div>
            <BtnClose className="btn_close"><Blind>닫기</Blind></BtnClose>
          </li>
        </ul>
    </CommendForm>
    </>
  )
}