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

WebUI.setText(findTestObject('STC_08/STC_08_04/input_form-control mr-sm-2'), 'Test')

WebUI.click(findTestObject('STC_08/STC_08_04/button_Search'))

WebUI.verifyElementNotPresent(findTestObject('STC_01/b_Mhadum SanPaTong'), 0)

WebUI.verifyElementNotPresent(findTestObject('STC_01/b_Original Thai whisky by Lung'), 0)

WebUI.verifyElementNotPresent(findTestObject('STC_01/b_Larb Bunger with a lot of Ch'), 0)

WebUI.verifyElementNotPresent(findTestObject('STC_01/b_Moh Hom Shirt'), 0)

WebUI.verifyElementNotPresent(findTestObject('STC_01/b_Sai Ua Mhoo'), 0)

WebUI.verifyElementNotPresent(findTestObject('STC_01/b_Cab Mhoo'), 0)

WebUI.closeBrowser()

