import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:3000/')

WebUI.click(findTestObject('STC_02/a_Popular (1)'))

WebUI.verifyElementAttributeValue(findTestObject('STC_02/img_product-item'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/Mhadum.jpg?alt=media&token=57e461a3-2c33-4d9b-a7ee-e2fda0576b7f', 
    0)

WebUI.verifyElementText(findTestObject('STC_02/b_Mhadum SanPaTong'), 'Mhadum SanPaTong')

WebUI.verifyElementText(findTestObject('STC_02/div_Mhadum SanPaTong is a dog'), 'Mhadum SanPaTong is a dog meat that very famous in SanPaTong district ChiangMai.')

WebUI.verifyElementText(findTestObject('STC_02/b_Price 1200 THB'), 'Price: 1200 THB')

WebUI.verifyElementAttributeValue(findTestObject('STC_02/img_product-item_1'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/thai%20whisky.jpg?alt=media&token=98b80a5d-115a-44ca-a8bc-1bfa2e554a03', 
    0)

WebUI.verifyElementText(findTestObject('STC_02/b_Original Thai whisky by Lung'), 'Original Thai whisky by Lung Som')

WebUI.verifyElementText(findTestObject('STC_02/div_This is popular whisky in'), 'This is popular whisky in Thailand and very cheap price')

WebUI.verifyElementText(findTestObject('STC_02/b_Price 60 THB'), 'Price: 60 THB')

WebUI.closeBrowser()

